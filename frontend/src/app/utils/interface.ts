export interface SocialHandle {
  _id: string;
  platform: string;
  url: string;
  enabled: boolean;
}

export interface About {
  phoneNumber: string;
  address: string;
} 