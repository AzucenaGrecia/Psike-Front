import { css, Global } from "@emotion/react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PageContent from "./components/layout/PageContent";
import Dashboard from "./pages/Dashboard";
import HistoryPage from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Psychologists from "./pages/Psychologists";
import ShowAppointment from "./pages/ShowAppointment";
import ShowPsychologist from "./pages/ShowPsychologist";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // let gapi = window.gapi;
  // let clientId =
  //   "55420826679-ta7gh9fm2j3596fhk8setcqpkcka6d8g.apps.googleusercontent.com";
  // let API_KEY = "AIzaSyB4FREPsJE4KoZ-hvHsTHG2Ke4h7W05JrU";
  // let DISCOVERY_DOCS = [
  //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  // ];
  // let SCOPES = "https://www.googleapis.com/auth/calendar";

  // const handleClick = () => {
  //   gapi.load("client:auth2", () => {
  //     console.log("loaded client");

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: clientId,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     });

  //     gapi.client.load("calendar", "v3", () => console.log("bam!"));

  //     gapi.auth2
  //       .getAuthInstance()
  //       .signIn()
  //       .then(() => {
  //         let event = {
  //           summary: "Google I/O 2021 PRUEBA GRECIAFINAL",
  //           location: "800 Howard St., San Francisco, CA 94103",
  //           description:
  //             "A chance to hear more about Google's developer products.",
  //           start: {
  //             dateTime: "2021-03-26T09:00:00-07:00",
  //             timeZone: "America/Los_Angeles",
  //           },
  //           end: {
  //             dateTime: "2021-03-26T17:00:00-07:00",
  //             timeZone: "America/Los_Angeles",
  //           },
  //           attendees: [
  //             { email: "carlostuna015@gmail.com" },
  //             { email: "diegopumacode@gmail.com" },
  //             { email: "francorsr98@gmail.com" },
  //           ],
  //           reminders: {
  //             useDefault: false,
  //             overrides: [
  //               { method: "email", minutes: 24 * 60 },
  //               { method: "popup", minutes: 10 },
  //             ],
  //           },
  //         };

  //         let request = gapi.client.calendar.events.insert({
  //           calendarId: "primary",
  //           resource: event,
  //         });

  //         let eventPatch = {
  //           conferenceData: {
  //             createRequest: { requestId: "7qxalsvy0e" },
  //           },
  //         };

  //         request.execute(function (event) {
  //           console.log(event);

  //           gapi.client.calendar.events
  //             .patch({
  //               calendarId: "primary",
  //               eventId: `${event.id}`,
  //               resource: eventPatch,
  //               sendNotifications: true,
  //               conferenceDataVersion: 1,
  //             })
  //             .execute(function (event) {
  //               console.log("Conference created for event: %s", event.htmlLink);
  //               window.open(event.htmlLink);
  //             });
  //         });
  //       });
  //   });
  // };

  return (
    <div id="App">
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Raleway;
          }
          body {
            background-image:url("/images/bg.svg");
            background-size: cover;
            background-position:20px 20px 20px;
            background-repeat:no-repeat;
            width: 100%;
          }
          a,
          button {
            cursor: pointer;
          }
        `}
      />
      {/*<button onClick={handleClick}>Separar cita</button>*/}
      {/* <button onClick={handleClick}>Separar cita</button> */}
      <ToastContainer />
      <Router>
        <PageContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/psychologists/:id" component={ShowPsychologist} />
            <Route path="/psychologists" component={Psychologists} />
            <Route path="/psychologist/:id" component={ShowPsychologist} />
            <Route path="/appoitments/:id" component={ShowAppointment}/>
            <Route
              path="/psychologist/:id/specialty#1"
              component={ShowPsychologist}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/appoitments" component={HistoryPage} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </PageContent>
      </Router>
    </div>
  );
}

export default App;
