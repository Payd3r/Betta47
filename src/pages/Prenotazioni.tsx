import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  breakfast: boolean;
  parking: boolean;
  cleaning: boolean;
  pets: boolean;
  note?: string;
  privacy: boolean;
}

const Prenotazioni = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert('Prenotazione inviata! (controlla la console per i dati)');
  };

  const dataArrivo = watch('data_arrivo');

  return (
    <div className="min-h-screen p-4 md:p-8 bg-neutral-light">
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md">
        <h1 className="text-h1 font-playfair font-bold mb-6">
          {t('prenotazioni_page.title')}
        </h1>
        <p className="text-xl font-lato text-neutral-dark mb-8">
          {t('prenotazioni_page.subtitle')}
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          {/* Personal Information */}
          <div className="bg-neutral-light/50 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-4">
              {t('prenotazioni_page.form.personal_info')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.name')} *
                </label>
                <input
                  type="text"
                  {...register('name', { required: true, minLength: 2 })}
                  className="input-field"
                />
                {errors.name && (
                  <span className="text-xs md:text-sm text-red-500">
                    {t('prenotazioni_page.form.name')} è obbligatorio
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.email')} *
                </label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                  className="input-field"
                />
                {errors.email && (
                  <span className="text-xs md:text-sm text-red-500">
                    Email valida richiesta
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.phone')} *
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: true, minLength: 10 })}
                  className="input-field"
                />
                {errors.phone && (
                  <span className="text-xs md:text-sm text-red-500">
                    {t('prenotazioni_page.form.phone')} è obbligatorio
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stay Information */}
          <div className="bg-neutral-light/50 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-4">
              {t('prenotazioni_page.form.stay_info')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.check_in')} *
                </label>
                <input
                  type="date"
                  {...register('checkIn', { 
                    required: true,
                    validate: (value) => {
                      const today = new Date();
                      const selectedDate = new Date(value);
                      return selectedDate >= today;
                    }
                  })}
                  className="input-field"
                />
                {errors.checkIn && (
                  <span className="text-xs md:text-sm text-red-500">
                    Data di arrivo valida richiesta
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.check_out')} *
                </label>
                <input
                  type="date"
                  {...register('checkOut', { 
                    required: true,
                    validate: (value) => {
                      const checkIn = watch('checkIn');
                      if (!checkIn) return true;
                      const checkInDate = new Date(checkIn);
                      const checkOutDate = new Date(value);
                      return checkOutDate > checkInDate;
                    }
                  })}
                  className="input-field"
                />
                {errors.checkOut && (
                  <span className="text-xs md:text-sm text-red-500">
                    Data di partenza valida richiesta
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.guests')} *
                </label>
                <select {...register('guests', { required: true })} className="input-field">
                  <option value="">Seleziona</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
                {errors.guests && (
                  <span className="text-xs md:text-sm text-red-500">
                    Numero di ospiti richiesto
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
                  {t('prenotazioni_page.form.room_type')} *
                </label>
                <select {...register('roomType', { required: true })} className="input-field">
                  <option value="">Seleziona</option>
                  <option value="single">{t('prenotazioni_page.form.single')}</option>
                  <option value="double">{t('prenotazioni_page.form.double')}</option>
                  <option value="triple">{t('prenotazioni_page.form.triple')}</option>
                  <option value="suite">{t('prenotazioni_page.form.suite')}</option>
                  <option value="apartment">{t('prenotazioni_page.form.apartment')}</option>
                </select>
                {errors.roomType && (
                  <span className="text-xs md:text-sm text-red-500">
                    Tipo di camera richiesto
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-neutral-light/50 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-4">
              {t('prenotazioni_page.form.additional_services')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" {...register('breakfast')} className="w-4 h-4 text-secondary" />
                <span className="text-sm md:text-base font-lato text-neutral-dark">
                  {t('prenotazioni_page.form.breakfast')}
                </span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" {...register('parking')} className="w-4 h-4 text-secondary" />
                <span className="text-sm md:text-base font-lato text-neutral-dark">
                  {t('prenotazioni_page.form.parking')}
                </span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" {...register('cleaning')} className="w-4 h-4 text-secondary" />
                <span className="text-sm md:text-base font-lato text-neutral-dark">
                  {t('prenotazioni_page.form.cleaning')}
                </span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" {...register('pets')} className="w-4 h-4 text-secondary" />
                <span className="text-sm md:text-base font-lato text-neutral-dark">
                  {t('prenotazioni_page.form.pets')}
                </span>
              </label>
            </div>
          </div>

          {/* Special Notes */}
          <div className="bg-neutral-light/50 p-4 md:p-6 rounded-lg">
            <label className="block text-sm md:text-base font-lato font-medium text-neutral-dark mb-2">
              {t('prenotazioni_page.form.note')}
            </label>
            <textarea
              {...register('note')}
              rows={4}
              className="input-field resize-none"
              placeholder="Inserisci eventuali richieste speciali..."
            />
          </div>

          {/* Privacy */}
          <div className="bg-neutral-light/50 p-4 md:p-6 rounded-lg">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                {...register('privacy', { required: true })} 
                className="w-4 h-4 text-secondary mt-1 flex-shrink-0" 
              />
              <span className="text-sm md:text-base font-lato text-neutral-dark">
                {t('prenotazioni_page.form.privacy')} *
              </span>
            </label>
            {errors.privacy && (
              <span className="text-xs md:text-sm text-red-500 block mt-2">
                Accettazione privacy richiesta
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn-secondary text-lg px-8 py-4 w-full md:w-auto"
            >
              {t('prenotazioni_page.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Prenotazioni;