
// components
import HomeScreen from './Components/MainScreens/Screens/HomeScreen/HomeScreen'
import CategoriesScreen from './Components/MainScreens/Screens/CategoriesScreen/CategoriesScreen';
import FilteredNotesScreen from './Components/MainScreens/Screens/FilteredNotesScreen/FilteredNotesScreen';
import NotesScreen from './Components/NotesScreen/NotesScreen'

// base
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'

// providers
import NotesProvider from './Data/NotesProvider/NotesProvider';
import CategoriesProvider from './Data/CategoriesProvider/CategoriesProvider';
import NoteActionsProvider from './Data/NoteActions/NoteActionsProvider';
import SelectedActionProvider from './Data/SelectedActionProvider/SelectedActionProvider';
import StylesProvider from './Data/StylesProvider/StylesProvider';
import ErrorBoundary from './Data/ErrorBoundary';
import SlateActionsProvider from './Data/SlateActions/SlateActionsProvider';
import PreferencesScreen from './Components/MainScreens/Screens/PreferencesScreen/PreferencesScreen';
import PreferencesProvider from './Data/PreferencesProvider/PreferencesProvider';
import UtiityFunctionsProvider from './Data/UtiityFunctionsProvider/UtiityFunctionsProvider';


const App = () => {

  return (
    <ErrorBoundary>
      <Router basename="/app-notas">
        <PreferencesProvider>
        <StylesProvider>
        <NotesProvider>
        <SelectedActionProvider>
        <CategoriesProvider>
        <UtiityFunctionsProvider>
        <NoteActionsProvider>
        <SlateActionsProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/categories" element={<CategoriesScreen />} />
            <Route path="/filtered-notes/:filter" element={<FilteredNotesScreen />} />
            <Route path="/note/:id" element={<NotesScreen />} />
            <Route path='/preferences' element={<PreferencesScreen />} />
          </Routes>
        </SlateActionsProvider>
        </NoteActionsProvider>
        </UtiityFunctionsProvider>
        </CategoriesProvider>
        </SelectedActionProvider>
        </NotesProvider>
        </StylesProvider>
        </PreferencesProvider>
      </Router>
    </ErrorBoundary>
  )

}

export default App;