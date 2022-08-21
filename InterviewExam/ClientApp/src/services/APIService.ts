import Axios from "axios";
import { Item } from "../models/Item";
import { Token } from "../models/Token";
import { User } from "../models/User";

export default class APIService {

  static async GetStuff(token:string) {
      const response = await Axios.get<Item>("/api/item/get", {
          headers: {
              "Authorization": "Bearer "+token
          }
      });

    return response.data;
    }

    static async Authenticate(user: User) {
        const response = await Axios.post("api/Item/Authenticate", user);
        return response.data;
    }

}
