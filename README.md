## 📌 **Google Places Autocomplete App**
A **React-based web application** that allows users to **search for places using Google Places Autocomplete**, view them on **Google Maps**, and save search history with the option to mark places as favorites.

---

## 🚀 **Features**
✅ **Google Places Autocomplete** – Search and select places dynamically.  
✅ **Google Maps Integration** – View selected places on an interactive map.  
✅ **Redux Toolkit for State Management** – Stores search history in Redux state.  
✅ **Search History with Delete Option** – View past searches and clear history with a trash icon 🗑️.  
✅ **Mark as Favorite** – Save locations as favorites with a button click.  
✅ **Material UI for Styling** – Responsive, modern UI with a clean design.  
✅ **Fully Responsive** – Works on both desktop and mobile.  

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

## 📂 **Project Structure**
📸 **Project Folder Screenshot:**  
![Project Folder Structure]

```
google-places-app/
│── src/
│   ├── assets/                   # Images and static assets
│   ├── components/
│   │   ├── SearchBar.jsx         # Search input with Google Places Autocomplete
│   │   ├── MapView.jsx           # Displays the selected location on Google Maps
│   │   ├── SearchHistory.jsx     # Displays search history with delete/favorite options
│   ├── pages/
│   │   ├── HomePage.jsx          # Main page with layout
│   ├── redux/
│   │   ├── store.js              # Redux store setup
│   │   ├── placeSlice.js         # Redux slice for managing searches
│   ├── services/
│   │   ├── api.js                # Handles API calls (if needed)
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Renders the app
│   ├── App.css                    # Styles
│   ├── vite.config.js              # Vite configuration
│── .env                            # Environment variables (API keys)
│── package.json                    # Dependencies
│── README.md                       # Project documentation
```

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
4️⃣ **Click "Save as Favorite"** – mark a place as a favorite.  
5️⃣ **Click the 🗑️ trash icon** – clears the search history.