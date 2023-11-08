// import { useEffect } from "react";
// import { RouterProps } from "react-router-dom";
// import { withRouter } from 'react-router'

// export interface ScrollToTopProps {
//   history: RouterProps["history"];
// }

// const ScrollToTop: React.FC<ScrollToTopProps> = ({ history }) => {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return null;
// };

// export default withRouter(ScrollToTop);
