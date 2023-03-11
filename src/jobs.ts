import { z } from 'zod';
import { addDoc, CollectionReference } from 'firebase/firestore';

export const COLLECTION_NAME = 'jobs';

export const JobApplicationSchema = z.object({
  title: z.string().min(3),
  companyName: z.string().min(1),
  dateApplied: z.coerce.date(),
  location: z.string().min(2),
  jobListing: z.string().url().optional(),
});

type JobApplication = z.infer<typeof JobApplicationSchema>;

export const addJobApplication = async (collectionRef: CollectionReference, data: JobApplication): Promise<void> => {
  try {
    await addDoc(collectionRef, data);

    console.log('Added collection', collectionRef.id);
  } catch (error) {
    console.log(error);
  }
};
