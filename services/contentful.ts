import { createClient, EntryCollection, EntrySkeletonType } from 'contentful';
import { PerfumeFields } from '../types';

const SPACE_ID = "1xonhvim4ath";
const ACCESS_TOKEN = "mT1VVOd0-xn5GOuXhHz9Y7UXtG6oCYcGoPW1FNDBipU";

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// Define the skeleton type required by Contentful SDK v10+
export interface PerfumeSkeleton extends EntrySkeletonType {
  contentTypeId: 'parfumes';
  fields: PerfumeFields;
}

export const getPerfumes = async (): Promise<EntryCollection<PerfumeSkeleton>> => {
  try {
    const response = await client.getEntries<PerfumeSkeleton>({
      content_type: 'parfumes',
    });
    return response;
  } catch (error) {
    console.error("Error fetching perfumes from Contentful:", error);
    throw error;
  }
};