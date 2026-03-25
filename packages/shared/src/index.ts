export interface HealthCheck {
  status: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
}

// ================== TAMBAHAN ==================

export interface Course {
  id: string;
  name: string;
  section?: string;
}

export interface SubmissionAttachmentItem {
  driveFile?: {
    title: string;
    alternateLink: string;
  };
  link?: {
    url: string;
    title?: string;
  };
  youtubeVideo?: {
    title: string;
    alternateLink: string;
  };
  form?: {
    formUrl: string;
    responseUrl?: string;
    title: string;
  };
}

export interface CourseWork {
  id: string;
  title: string;
  description?: string;
  dueDate?: {
    year: number;
    month: number;
    day: number;
  };
  maxPoints?: number;

  materials?: {
    driveFile?: { driveFile: { title: string; alternateLink: string } };
    link?: { url: string; title?: string };
    youtubeVideo?: { title: string; alternateLink: string };
    form?: { formUrl: string; title: string };
  }[];
}

export interface Submission {
  id: string;
  courseWorkId: string;
  state?: string;
  late?: boolean;
  assignedGrade?: number;
  draftGrade?: number;

  assignmentSubmission?: {
    attachments?: SubmissionAttachmentItem[];
  };

  shortAnswerSubmission?: {
    answer?: string;
  };
}

export interface CourseWorkWithSubmission {
  courseWork: CourseWork;
  submission: Submission | null;
}