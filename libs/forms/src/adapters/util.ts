export const intFilter = (data?: [number, number]) => {
  if (!data) return {}
  const filterObj: { gte?: number; lte?: number } = {}
  if (data[0] !== undefined) filterObj.gte = data[0]
  if (data[1] !== undefined) filterObj.lte = data[1]
  return filterObj
}
