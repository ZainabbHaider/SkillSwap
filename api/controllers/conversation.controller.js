import createError from "../utils/createError.js"
import Conversation from '../models/conversation.model.js';
export const createConversation = (req, res, next) => {
    const newConversation = new Conversation({
        id: req.userId + req.body.to,
        user1Id: req.user1Id,
        user2Id: req.body.to,
        readbyUser1: req
    });
}

export const getConversations = (req, res, next) => {

}

export const getSingleConversation = (req, res, next) => {

}

export const updateConversation = (req, res, next) => {
}