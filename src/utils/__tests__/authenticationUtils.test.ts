import { mock } from "jest-mock-extended";
import { FirebaseApp } from "@firebase/app";
import { Persistence } from "firebase/auth";

const cleanUp = () => {
  jest.resetAllMocks();
  jest.resetModules();
}

describe("authenticationUtils.ts", () => {
  describe("when authenticateWithGoogle is called", () => {
    describe("given valid authentication", () => {

      let mockAuthObject: jest.FunctionLike;

      let mockGoogleAuthProvider: any;

      let mockGetAuth: jest.FunctionLike;

      let mockLocalBrowserPersistence: Persistence;

      let mockSetPersistence: jest.FunctionLike;

      let mockSignInWithPopup: jest.FunctionLike;

      let mockAuth: object;

      let mockFirebaseApp: FirebaseApp;

      let mockClientApp: object;

      beforeAll(async () => {
        mockAuthObject = jest.fn();

        mockGoogleAuthProvider = jest.fn().mockImplementation(() => {return "mockAuthProvider"});
  
        mockGetAuth = jest.fn().mockReturnValue(mockAuthObject);
  
        mockLocalBrowserPersistence = mock<Persistence>();
  
        mockSetPersistence = jest.fn().mockResolvedValue(null);
  
        mockSignInWithPopup = jest.fn().mockResolvedValue(null);
  
        mockFirebaseApp = mock<FirebaseApp>();
  
        mockAuth = {
          GoogleAuthProvider: mockGoogleAuthProvider,
          getAuth: mockGetAuth,
          browserLocalPersistence: mockLocalBrowserPersistence,
          setPersistence: mockSetPersistence,
          signInWithPopup: mockSignInWithPopup,
        }
  
        mockClientApp = {
          firebaseApp: mockFirebaseApp,
        }

        jest.mock("firebase/auth", () => mockAuth);
        jest.mock("firebaseClient/clientapp", () => mockClientApp)
        
        const {authenticateWithGoogle} = require("../authenticationUtils");

        await authenticateWithGoogle();
      })

      afterAll(cleanUp);

      test("then persistence is set to browserLocalPersistence", () => {
        expect(mockSetPersistence).toHaveBeenNthCalledWith(1, mockAuthObject, mockLocalBrowserPersistence);
      })

      test("then sigin is called via popup", () => {
        expect(mockSignInWithPopup).toHaveBeenNthCalledWith(1, mockAuthObject, new mockGoogleAuthProvider());
      })
    })

    describe("given erroneous authentication", () => {
      let mockAuthObject: jest.FunctionLike;

      let mockGoogleAuthProvider: any;

      let mockGetAuth: jest.FunctionLike;

      let mockLocalBrowserPersistence: Persistence;

      let mockSetPersistence: jest.FunctionLike;

      let mockSignInWithPopup: jest.FunctionLike;

      let mockAuth: object;

      let mockFirebaseApp: FirebaseApp;

      let mockClientApp: object;

      beforeAll(async () => {
        mockAuthObject = jest.fn();

        mockGoogleAuthProvider = jest.fn().mockImplementation(() => {return "mockAuthProvider"});
  
        mockGetAuth = jest.fn().mockReturnValue(mockAuthObject);
  
        mockLocalBrowserPersistence = mock<Persistence>();
  
        mockSetPersistence = jest.fn().mockResolvedValue(null);
  
        mockSignInWithPopup = jest.fn().mockRejectedValue("rejected");
  
        mockFirebaseApp = mock<FirebaseApp>();
  
        mockAuth = {
          GoogleAuthProvider: mockGoogleAuthProvider,
          getAuth: mockGetAuth,
          browserLocalPersistence: mockLocalBrowserPersistence,
          setPersistence: mockSetPersistence,
          signInWithPopup: mockSignInWithPopup,
        }
  
        mockClientApp = {
          firebaseApp: mockFirebaseApp,
        }

        console.error = jest.fn();
        jest.mock("firebase/auth", () => mockAuth);
        jest.mock("firebaseClient/clientapp", () => mockClientApp);

        const {authenticateWithGoogle} = require("../authenticationUtils");

        await authenticateWithGoogle();
      })

      afterAll(cleanUp);

      test("then persistence is set to browserLocalPersistence", () => {
        expect(mockSetPersistence).toHaveBeenNthCalledWith(1, mockAuthObject, mockLocalBrowserPersistence);
      })

      test("then sigin is called via popup", () => {
        expect(mockSignInWithPopup).toHaveBeenNthCalledWith(1, mockAuthObject, new mockGoogleAuthProvider());
      })

      test("then error is logged", () => {
        expect(console.error).toHaveBeenNthCalledWith(1, "rejected");
      })
    })
  });
})