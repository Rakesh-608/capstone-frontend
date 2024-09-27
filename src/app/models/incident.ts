// export interface Incident {
//     location: string;
//     time: Date;
//     description: string;
//     incidentType: string;
//     reviewStatus: boolean;
//   }
  

export interface Incident {
  id: string;
  user_id: number;
  location: string;
  time: Date;
  description: string;
  incidentType: string;
  reviewStatus: boolean;
  dateOfPosted: Date;
}
