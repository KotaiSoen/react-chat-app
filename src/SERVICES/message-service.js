import { db } from "../firebase";
import { collection, getDocs, addDoc, doc, getDoc} from "firebase/firestore";

const messageService = {
    getGroups: async () => {
        const querySnapshot = await getDocs(collection(db, 'groups'));
    
        const groups = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        return groups;
            
    },
    getGroupInfo: async(id) => {
        const snapshot = await getDoc(doc(db, 'groups', id));

        const groupInfo = snapshot.data();

        return groupInfo;
    },
    getUsersData: async() => {
        const querySnapshot = await getDocs(collection(db, 'users'));

        const users = querySnapshot.docs.map((doc) => ({...doc.data()}));

        return users;
    }
}

export default messageService;