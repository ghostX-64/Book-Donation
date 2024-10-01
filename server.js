const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/book-donation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const bookSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    books: [
        {
            sno: Number,
            booktitle: String,
            author: String,
            genre: String,
            yop: String,
            isbn: String
        }
    ]
});

const BookDonation = mongoose.model('BookDonation', bookSchema);

app.post('/api/donate', async (req, res) => {
    const { name, phone, email, books } = req.body;

    try {
        const donation = new BookDonation({
            name,
            phone,
            email,
            books
        });
        await donation.save();
        res.status(200).send({ message: 'Donation saved successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to save donation', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
