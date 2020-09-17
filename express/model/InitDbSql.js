module.exports = `

DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quote VARCHAR(200) NOT NULL,
    quote_color VARCHAR(20) NOT NULL,
    background_color VARCHAR(20) NOT NULL
);


INSERT INTO quotes (quote, quote_color, background_color)
VALUES
    ("Do Not Let Yesterday Take Up Too Much Of Today.",
    "white", "#81D8D0"),
    ("The purpose of art is washing the dust of daily life off our souls.", 
    "orange", "yellow"),
    ("If You Are Working On Something That You Really Care About, You Do Not Have To Be Pushed. The Vision Pulls You.", 
    "darkblue", "lightblue");

`