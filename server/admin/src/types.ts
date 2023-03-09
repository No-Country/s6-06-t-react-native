
export interface User {
  isOnline:         boolean;
  emailisvalidated: boolean;
  languages:        any[];
  softSkills:       any[];
  postulations:     any[];
  fullName:         string;
  email:            string;
  password:         string;
  admin:            boolean;
  selected:         boolean;
  active:           boolean;
  availability:     string;
  technologies:     string[];
  phone:            string;
  position:         string;
  img_avatar:       string;
  comments:         any[];
  favorites:        any[];
  channels:         any[];
  job_applications: any[];
  posts:            any[];
  reactions:        any[];
  createdAt:        string;
  updatedAt:        string;
  workExperience:   any[];
  education:        any[];
  uid:              string;
  id?: string
}
