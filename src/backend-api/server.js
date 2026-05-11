const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require("./routes/contact");

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
