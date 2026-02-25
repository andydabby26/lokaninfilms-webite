import { Route, Switch, useLocation } from "wouter";
import Index from "./pages/index";
import About from "./pages/about";
import Story from "./pages/story";
import ProjectDetail from "./pages/project-detail";
import Contact from "./pages/contact";
import { Provider } from "./components/provider";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToHash } from "./components/scroll-to-hash";

function App() {
        const [location] = useLocation();

        return (
                <Provider>
                        <ScrollToHash />
                        <AnimatePresence mode="wait">
                                <motion.div
                                        key={location}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                        <Switch>
                                                <Route path="/" component={Index} />
                                                <Route path="/about" component={About} />
                                                <Route path="/story" component={Story} />
                                                <Route path="/projects/:id" component={ProjectDetail} />
                                                <Route path="/contact" component={Contact} />
                                        </Switch>
                                </motion.div>
                        </AnimatePresence>
                </Provider>
        );
}

export default App;
