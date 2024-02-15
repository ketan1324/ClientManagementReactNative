import { fetchHelper } from "../helper/fetchHelper";

const POST_METHOD = "POST";
const GET_METHOD = "GET";

const USER_ENDPOINT = "users";
const ACCOUNT_ENDPOINT = "account"

export const UPDATE_ON_USER = "UpdateOnUser";
export const UPDATE_ON_ACCOUNT = "UpdateOnAccount"

class CRUDMethods {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    async create(body = null) {
        return fetchHelper(this.endpoint, POST_METHOD, data = body);
    }

    async getAll(body = null) {
        return fetchHelper(this.endpoint, GET_METHOD, body);
    }

}

export var endpoints = {
    Users: new CRUDMethods(USER_ENDPOINT),
    Account: new CRUDMethods(ACCOUNT_ENDPOINT)
}