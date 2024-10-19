export interface Type {
  id: number;
  name: string;
  sprites: Sprites;
}
interface Sprites {
  "generation-ix": GenerationIX;
}
interface GenerationIX {
  "scarlet-violet": nameIcon;
}

interface nameIcon {
  name_icon: string;
}
