CREATE TABLE IF NOT EXISTS device_names (
    id SERIAL PRIMARY KEY,
    category TEXT   
);

CREATE TABLE IF NOT EXISTS medical_devices (
    id SERIAL PRIMARY KEY,
    device_id INTEGER,
    name TEXT,
    duration TEXT,
    image_src TEXT,
    FOREIGN KEY (device_id) REFERENCES device_names(id)
);

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
)