import z from 'zod'
export const BookingFormShema = z.object({
    date: z.string("field date is required"),
    timeFrom: z.string("field timeFrom is required"),
    timeTo: z.string("field timeTo is required"),
    comment: z.string("field comment is required"),
})