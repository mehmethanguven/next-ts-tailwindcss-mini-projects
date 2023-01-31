import Card from '@/components/Card'
import { IPrice } from '@/types/IPrice'
import { PriceItem } from './PriceItem'

const prices: IPrice[] = [
  {
    title: 'basic',
    quota: '100GB',
    monthlyPrice: 1.99,
    options: [
      '100 GB of storage',
      'option to add members',
      'extra member benefits',
    ],
    isDefault: false,
    buttonTitle: 'purchase',
  },
  {
    title: 'standard',
    quota: '200GB',
    monthlyPrice: 3.99,
    options: [
      '200 GB of storage',
      'option to add members',
      'extra member benefits',
    ],
    isDefault: true,
    buttonTitle: 'purchase',
  },
  {
    title: 'premium',
    quota: '2TB',
    monthlyPrice: 8.99,
    options: [
      '2 TB of storage',
      'option to add members',
      'extra member benefits',
    ],
    isDefault: false,
    buttonTitle: 'purchase',
  },
]

const PricingCard = () => {
  return (
    <div>
      <Card
        title="pricing card"
        isBack={true}
        classNameTitle="text-xl text-slate-700 dark:text-white"
      />
      <Card className="mt-2">
        <div className="my-10 flex items-center justify-center dark:selection:bg-slate-800">
          <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-y-0 md:space-x-6">
            {(prices || []).map((item, id) => (
              <PriceItem key={id} {...item} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PricingCard
