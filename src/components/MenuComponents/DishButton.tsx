import { getCurrentPrice } from '../../services/utilities'
import { priceToLocal } from '../../services/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikProps } from 'formik';


type PropTypes = {

    formik: FormikProps<any>

}

export const DishButton: React.FunctionComponent<PropTypes> = ({ formik }: PropTypes) => {


    return (
        <footer className="w-full h-14  flex items-center justify-around bg-white flex-grow fixed bottom-0">
            <div className="flex flex-grow justify-evenly items-center">
                <button type='button' className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs" onClick={() => { if (formik.values.count > 1) formik.setFieldValue('count', formik.values.count - 1) }}>
                    <FontAwesomeIcon icon="minus" />
                </button>
                <p>{formik.values.count}</p>
                <button type='button' className="rounded-lg h-7 w-7 bg-red text-white font-bold text-xs" onClick={() => formik.setFieldValue('count', formik.values.count + 1)}>
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>
            <button id="orderButton" className="bg-red flex-grow text-white font-bold rounded-full py-2 px-7" type='submit'>
                <p>Für {priceToLocal(getCurrentPrice(600, 120))} hinzufügen</p>
            </button>
        </footer>
    )
}
