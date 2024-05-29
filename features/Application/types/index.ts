import { ApplicationType } from "../constants";

export interface IApplicationItem {
  name: string;
  link: string;
  type: ApplicationType[];
  thumbnailUrl: string;
  skills: {
    name: string;
    image: string;
  }[];
}
