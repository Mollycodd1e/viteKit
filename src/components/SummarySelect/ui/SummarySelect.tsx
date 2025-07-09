import React, { Suspense } from 'react'
import { Select } from '../../Select'
import { MultiSelectProps, TCategory, TOption } from '../../Select/ui/Select.types'
import s from './SummarySelect.module.scss'

const ResetIcon = React.lazy(() => import('../../NewIcon/assets/Close.svg?react'));

interface ISummarySelectProps extends MultiSelectProps {
	label?: string
	isShowReset?: boolean
	isLast?: boolean
}

export const SummarySelect: React.FC<ISummarySelectProps> = ({
	label = '',
	isShowReset,
	...props
}) => {
	const handleChangeSelect = (selectedOptions: TOption[] | TCategory[]) => {
		if (props.onChange) {
			props.onChange(selectedOptions)
		}
	}

	const handleRemoveOption = (value: string) => {
		const updatedSelect = props.selectedValues?.filter((s) => s.value !== value) || []
		handleChangeSelect(updatedSelect)
	}

	const handleClearAll = () => {
		handleChangeSelect([])
	}

	const handleClearCategory = (category: TCategory) => {
		handleChangeSelect(
			props.selectedValues
				?.filter((e) => e.value !== category.value)
				.filter(
					(optionSelected) =>
						!category.options.some((option) => option.value === optionSelected.value)
				) ?? []
		)
	}

	const categoryList = props.selectedValues?.filter((e) => 'options' in e)

	return (
		<div className={s.root}>
			<div className={s.nameWrapper}>
				<div>{label}</div>
				{isShowReset && (
					<div
						className={s.clearBtn}
						onClick={handleClearAll}>
						Очистить
					</div>
				)}
			</div>
			<Select
				{...props}
				onChange={handleChangeSelect}
			/>
			{props.mode === 'options' && props.selectedValues && props.selectedValues.length > 0 && (
				<div className={s.summaryList}>
					{props.selectedValues.map((m) => (
						<div
							key={m.value}
							onClick={() => handleRemoveOption(m.value.toString())}
							className={s.summaryOption}>
							{m.label}
							<Suspense fallback={null}>
								<ResetIcon width={16} height={16} />
							</Suspense>
						</div>
					))}
				</div>
			)}

			{props.mode === 'double' &&
				categoryList?.map((e, i) => {
					const category = e as TCategory

					return (
						<div
							className={s.summaryCategory}
							key={i}>
							<div className={s.headerCategory}>
								<div className={s.categoryTitle}>{category.label}</div>

								<div
									onClick={() => handleClearCategory(e as TCategory)}
									className={s.clearBtn}>
									<Suspense fallback={null}>
										<ResetIcon width={16} height={16} />
									</Suspense>
								</div>
							</div>

							<div className={s.categoryOptions}>
								{category.options
									.filter((el) => props.selectedValues?.some((e) => el.value === e.value))
									.map((option, i) => {
										return (
											<div
												key={i}
												onClick={() => handleRemoveOption(option.value.toString())}
												className={`${s.summaryOption} ${s.categoryOption}`}>
												{option.label}
												<Suspense fallback={null}>
													<ResetIcon width={16} height={16} />
												</Suspense>
											</div>
										)
									})}
							</div>
						</div>
					)
				})}
		</div>
	)
}
