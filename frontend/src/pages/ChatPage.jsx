import useAuthStore from "../store/useAuthStore";

const ChatPage = () => {
  const { logout } = useAuthStore();
  return (
    <div className="relative z-50">
      chatpage
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ChatPage;
