export interface Course {
    id: string;
    rating: number;
    description: string;
    courseName: string;
    exercises: {
      title: string;
    }[];
    topicsCovered: {
      topic: string;
    }[];
    lecturer: string;
    imageURL: string;
  }
  