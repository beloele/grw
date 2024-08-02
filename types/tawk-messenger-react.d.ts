declare module '@tawk.to/tawk-messenger-react' {
    import { Component } from 'react';
  
    interface TawkMessengerReactProps {
      propertyId: string;
      widgetId: string;
    }
  
    class TawkMessengerReact extends Component<TawkMessengerReactProps> {}
  
    export default TawkMessengerReact;
  }
  