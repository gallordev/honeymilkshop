
import { db } from "@/lib/firebase/firebase";
import { doc, setDoc,collection, query,getDocs } from "firebase/firestore";

export async function addData(colllection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getImages() {
	let q = query(collection(db, "users"));
	const results = await getDocs(q);
	return results.docs.map(doc => {
		return {
			id: doc.id,
			...doc.data()
		};
	});
}