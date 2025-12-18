'use client'

import { createContext, useContext } from 'react'

const RESOURCE = 'https://github.com/fakefedya'

interface ResourceContextProps {
	resourceUrl: string
}

const ResourceContext = createContext<ResourceContextProps | undefined>(
	undefined,
)

export const useResource = () => {
	const context = useContext(ResourceContext)
	if (!context) {
		throw new Error('useResource должен использоваться внутри ResourceProvider')
	}
	return context
}

export const ResourceProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const value = { resourceUrl: RESOURCE }
	return (
		<ResourceContext.Provider value={value}>
			{children}
		</ResourceContext.Provider>
	)
}
