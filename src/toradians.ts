export function toRadians(inDegrees:number):number {
  return (inDegrees * Math.PI) / 180;
}

export function toDegrees(inRadians:number):number {
  return (inRadians * 180) / Math.PI;
}
