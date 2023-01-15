import { addDoc, CollectionReference } from 'firebase/firestore';

export const COLLECTION_NAME = 'jobs';

type JobApplicationData = {
  companyName: string;
  position: string;
  dateApplied: number;
  jobPostingLink: string;
};

export const addJobApplication = async (
  collectionRef: CollectionReference,
  data: JobApplicationData,
): Promise<void> => {
  try {
    await addDoc(collectionRef, data);

    console.log('Added collection', collectionRef.id);
  } catch (error) {
    console.log(error);
  }
};
