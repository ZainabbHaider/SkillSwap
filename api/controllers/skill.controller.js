// import skillModel from '../models/skill.model.js';
import Skill from '../models/skill.model.js';
import createError from "../utils/createError.js";


export const createSkill = async (req, res, next) => {
    const newSkill = new Skill({
        userId: req.userId,
        ...req.body,
    });

    try {
        const savedSKill = await newSkill.save();
        res.status(201).json(savedSKill);
    } catch (err) {
        next(err);
   }
}
export const deleteSkill = async (req, res, next) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (skill.userId !== req.userId) {
            return next(createError(403, "You are not allowed to delete this skill!"));
        }
        await Skill.findByIdAndDelete(req.params.id);
        res.status(200).send("Skill has been deleted!");
    } catch (err) {
        console.log(err);
        next(err);
    }
}
export const getSkill = async (req, res, next) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) return next(createError(404, "Skill not found!"));
        res.status(200).send(skill);
    } catch (err) {
        next(err);
    }
}
export const getSkills = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.userId && {userId: q.userId}),
        ...(q.category&& {category: q.category}),
        ...(q.search && {title:{$regex:q.search, $options:"i"}}),
    }

    try {
        let sortOrder = -1; // Default sort order

        if (q.sort === "createdAt") {
        sortOrder = 1; // Change sort order if q.sort is "createdAt"
        }

        const sort = {
        [q.sort]: sortOrder
        };

        const skills = await Skill.find(filters).sort(sort);
        // if (!skill) return next(createError(404, "No Skills Available!"));
        res.status(200).send(skills);
    } catch (err) {
        next(err);
    }
}
