import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes';
import './index.css'
import "@radix-ui/themes/styles.css";
import App from './App.jsx'
import { AuthContextProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
<AuthContextProvider>
    <Theme
    appearance="dark"
    accentColor="blue"
    grayColor="mauve"
    radius="large"
    scale="medium"
    scaling='105%'
  >
    <App />
  </Theme>
  
</AuthContextProvider>

)
