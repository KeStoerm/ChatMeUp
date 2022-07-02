import { withAuthetication } from "components/withAuthentication/withAuthentication";

const Chat: React.FC = withAuthetication(() => <div>Chat</div>);

export default Chat;