import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicsemesterModel'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemester,
}
