interface IFormData {
    userInfo: IUserInfo[];
    spells: Record<string, unknown>[];
}

export interface IUserInfo {
    name: string;
}

export default IFormData;
