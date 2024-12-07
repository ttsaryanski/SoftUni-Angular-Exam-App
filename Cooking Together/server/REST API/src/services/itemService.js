import querystring from "querystring";

import Item from "../models/Item.js";

const getAll = (query = {}) => {
  let items = Item.find();

  if (query.search) {
    items.find({ title: { $regex: query.search, $options: "i" } });
  }
  if (query.limit) {
    items.find().limit(query.limit).sort({ dateUpdate: -1 });
  }

  return items;
};

const getAllPaginated = async (query = {}) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const skip = (page - 1) * limit;

  const [items, totalCount] = await Promise.all([
    Item.find().skip(skip).limit(limit).sort({ dateUpdated: -1 }),
    Item.countDocuments(),
  ]);

  const totalPages = Math.ceil(totalCount / limit);
  const currentPage = page;

  return { items, totalCount, totalPages, currentPage };
};

const create = (data, userId) => Item.create({ ...data, _ownerId: userId });

const getById = (itemId) => Item.findById(itemId);

const remove = (itemId) => Item.findByIdAndDelete(itemId);

const edit = (itemId, data) => {
  data.dateUpdate = Date.now();

  return Item.findByIdAndUpdate(itemId, data, {
    runValidators: true,
    new: true,
  });
};

const like = (itemId, userId) =>
  Item.findByIdAndUpdate(itemId, {
    $addToSet: { likes: userId, new: true },
  });

const topThree = () => {
  const topRecipes = Item.aggregate([
    {
      $addFields: {
        likesCount: { $size: "$likes" },
      },
    },
    {
      $sort: {
        likesCount: -1,
        dateUpdate: -1,
      },
    },
    {
      $limit: 3,
    },
  ]);

  return topRecipes;
};

const getByOwnerId = (ownerId) => Item.find({ _ownerId: ownerId });

const getByLikedId = (userId) => Item.find({ likes: userId });

export default {
  getAll,
  getAllPaginated,
  create,
  getById,
  remove,
  edit,
  like,
  topThree,
  getByOwnerId,
  getByLikedId,
};
