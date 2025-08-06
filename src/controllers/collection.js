const Clipboard = require("../models/Clipboard");

const startCollection = async (req, res, next) => {
    try {
        const { collection: collectionName } = req.body;
        let url = "";
        if (!collectionName) return res.status(400).json({ message: "Collection name is required!" })

        const collectionExist = await Clipboard.findOne({ name: collectionName });
        if (collectionExist) {
            url = `${req.protocol}://${req.get("host")}/collection/${collectionExist.name}`;
        } else {
            await Clipboard.create({ name: collectionName })
            url = `${req.protocol}://${req.get("host")}/collection/${collectionName}`;
        }
        res.status(200).json({ url })
    } catch (error) {
        console.log(error.message)
    }

}


const writer = async (req, res, next) => {
    const { name } = req.params;
    if (!name) return res.redirect(301, "/");
    const clip = await Clipboard.findOne({ name });
    if (!clip) return res.redirect(301, "/");
    res.render("writer", { content: clip.content, collection: name });
}

module.exports = { startCollection, writer };
