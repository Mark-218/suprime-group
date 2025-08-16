# Supreme Group – Frontend

This is my implementation of a responsive website frontend, built as part of a technical assessment task. It is developed using Next.js, TypeScript, and Tailwind CSS, carefully following the design specifications provided in the Figma file.

**Live Demo:** _[https://suprime-web.vercel.app/]_  
**GitHub:** _[https://github.com/Mark-218/suprime-group]_

---

## 🛠 Tech Stack
- **Next.js** – Routing, SSR, Image Optimization
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first styling
- **lucide-react** – Icons

---

## 🚀 Getting Started
1. **Clone the repo**
   ```bash
   git clone https://github.com/Mark-218/suprime-group.git
   cd suprime-group
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run development server**
   ```bash
   npm run dev
   ```
   Visit: [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 📂 Project Structure
- `components/` – Common reusable components like Navbar, Footer  
- `sections/` – Large page sections (Hero, Vehicle Showcase, Contact)  
- `app/index.tsx` – Main page composition using the above components  

---

## 📱 Responsiveness
The layout adapts to mobile, tablet, and desktop using Tailwind breakpoints.  
Tested on Chrome and Edge for different screen sizes.

---

## ⚡ Performance
- Optimized with `next/image` for responsive and lazy-loaded images  
- Code-splitting handled automatically by Next.js  

---

## ♿ Accessibility
- Semantic HTML tags (`header`, `main`, `footer`)  
- Accessible labels for interactive elements  

---

## 📝 Notes
- The site matches the provided Figma as closely as possible with Tailwind utilities  
- State management was not required due to the static nature of the site  
- All assets are stored in `public/`  
