/**
 * Critical CSS styles for above-the-fold content
 * These styles are inlined in the document head for faster FCP
 */

export const criticalCSS = `
  /* Reset and base */
  *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
  html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
  body{margin:0;line-height:inherit}
  
  /* Hero section critical styles */
  .min-h-screen{min-height:100vh}
  .relative{position:relative}
  .absolute{position:absolute}
  .inset-0{inset:0}
  .z-0{z-index:0}
  .z-10{z-index:10}
  .z-20{z-index:20}
  
  /* Flexbox for hero */
  .flex{display:flex}
  .items-center{align-items:center}
  .justify-center{justify-content:center}
  .flex-col{flex-direction:column}
  
  /* Background gradients */
  .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
  .from-neutral-50{--tw-gradient-from:#fafafa;--tw-gradient-to:rgb(250 250 250 / 0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
  .via-white{--tw-gradient-to:rgb(255 255 255 / 0);--tw-gradient-stops:var(--tw-gradient-from),#fff,var(--tw-gradient-to)}
  .to-amber-50\/30{--tw-gradient-to:rgb(255 251 235 / 0.3)}
  
  /* Text styles */
  .text-center{text-align:center}
  .text-2xl{font-size:1.5rem;line-height:2rem}
  .text-lg{font-size:1.125rem;line-height:1.75rem}
  .font-medium{font-weight:500}
  .font-display{font-family:var(--font-sinkin-sans),Inter,sans-serif}
  
  /* Colors */
  .text-\\[\\#2A3959\\]{color:#2A3959}
  .text-\\[\\#F9A625\\]{color:#F9A625}
  .bg-\\[\\#2A3959\\]{background-color:#2A3959}
  .bg-\\[\\#F9A625\\]{background-color:#F9A625}
  .border-\\[\\#F9A625\\]{border-color:#F9A625}
  
  /* Spacing */
  .p-4{padding:1rem}
  .px-4{padding-left:1rem;padding-right:1rem}
  .py-8{padding-top:2rem;padding-bottom:2rem}
  .mb-4{margin-bottom:1rem}
  .mb-8{margin-bottom:2rem}
  
  /* Animations */
  .animate-spin{animation:spin 1s linear infinite}
  @keyframes spin{to{transform:rotate(360deg)}}
  
  /* Opacity */
  .opacity-0{opacity:0}
  .opacity-100{opacity:1}
  
  /* Object fit */
  .object-cover{object-fit:cover}
  
  /* Width/Height */
  .w-full{width:100%}
  .h-full{height:100%}
  .w-16{width:4rem}
  .h-16{height:4rem}
  
  /* Border */
  .rounded-full{border-radius:9999px}
  .border-4{border-width:4px}
  .border-t-transparent{border-top-color:transparent}
  
  /* Video container */
  .overflow-hidden{overflow:hidden}
  
  /* Prevent layout shift */
  .aspect-video{aspect-ratio:16/9}
  
  /* Loading states */
  .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
`;

export function getCriticalCSS(): string {
    return criticalCSS;
}
