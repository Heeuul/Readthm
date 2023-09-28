import { MusicNoteProvider } from "./hooks/useMusicNote";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <MusicNoteProvider>
      <HomeScreen />
    </MusicNoteProvider>
  );
}
