import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/useAuthContext";

const getConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${authUser.token}`,
          },
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
        console.log(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default getConversations;
