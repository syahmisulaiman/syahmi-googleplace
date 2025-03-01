## 📌 **Google Places Autocomplete App**
A **React-based web application** that allows users to **search for places using Google Places Autocomplete** and view them on **Google Maps**.

---

## 🛠️ **Tech Stack**
| Technology  | Description |
|-------------|------------|
| **React (Vite)** | Fast frontend development framework |
| **Redux Toolkit** | State management for search history |
| **Material UI** | UI components and styling |
| **Google Maps API** | Maps and Places Autocomplete |
| **Redux Thunk** | Middleware for async API handling |
| **Vite** | Fast build tool for React |

---

## 🔧 **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/syahmisulaiman/syahmi-googleplace.git
cd google-places-app
```

### **2️⃣ Install Dependencies**
```sh
yarn install
```

### **3️⃣ Set Up `.env` File**
Create a `.env` file in the root and add your **Google Maps API key**:
```
VITE_GOOGLE_MAPS_API_KEY=your_google_api_key
```

### **4️⃣ Start the Development Server**
```sh
yarn dev
```

Now, open **`http://localhost:5173/`** in your browser.

---

## 📌 **Usage Guide**
1️⃣ **Type a place** in the search bar – results appear dynamically.  
2️⃣ **Select a location** – it will be displayed on Google Maps.  
3️⃣ **View Search History** – previously searched places appear below.  
4️⃣ **Click the 🗑️ trash icon** – clears the search history.