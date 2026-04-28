import type { BookingPostType } from "../../types/spaces-type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BookingFormShema } from "../../models/booking-form-shema"
import { SpacesAPI } from "../../api/spaces-api"

function BookingForm({ id }: { id: number }) {
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(BookingFormShema) })
    const onSubmitHandler = async (data: Omit<BookingPostType, "spaceId">) => {
        try {
            await SpacesAPI.bookingSpace({ ...data, spaceId: id })
            console.log(await SpacesAPI.bookingSpace({ ...data, spaceId: id }));

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label>Комментарий
                    <input className={errors.comment ? 'error-input' : ''} type="text" placeholder="comment" {...register('comment')} />
                    {errors.comment && <span className="error-text">{errors.comment.message}</span>}
                </label>
                <label>Дата
                    <input className={errors.date ? 'error-input' : ''} type="text" placeholder="date" {...register('date')} />
                    {errors.date && <span className="error-text">{errors.date.message}</span>}
                </label>
                <label>Со скольки
                    <input className={errors.timeFrom ? 'error-input' : ''} type="text" placeholder="timeFrom" {...register('timeFrom')} />
                    {errors.timeFrom && <span className="error-text">{errors.timeFrom.message}</span>}
                </label>
                <label>До скольки
                    <input className={errors.timeTo ? 'error-input' : ''} type="text" placeholder="timeTo" {...register('timeTo')} />
                    {errors.timeTo && <span className="error-text">{errors.timeTo.message}</span>}
                </label>

                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default BookingForm