export type TContext = {
  state: TState
  dispatch: React.Dispatch<any>
}

export type TChipSet = {
  name: string
  active: boolean
}

export type TRoadMap = {
  text: string
  count: number
}

export type TSuggestion = {
  upvote: number
  title: string
  lead: string
  tag: string
  comments: number
}

export type TState = {
  suggestions: TSuggestion[]
  chipset: TChipSet[]
  filter: string
}

export type TAction = {
  type: string
  payload: any
}

/* Interface for Props */
export interface IButtonProps {
  text: string
  icon: JSX.Element
  handleClick: () => void
  [x: string]: any
}

export interface IChipSetProps {
  text: string
  active?: boolean
  handleClick?: (text: string) => void
}

export interface IContextProps {
  state: TState
  dispatch: ({ type }: { type: string }) => void
}

export enum FILTER {
  "ALL",
  "UI",
  "UX",
  "ENHANCEMENT",
  "BUG",
  "FEATURE",
}
