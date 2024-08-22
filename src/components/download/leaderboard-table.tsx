"use client"

import * as React from "react"

import {
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { LeaderboardDataItem } from "@/lib/types"


const formatEvmAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export const columns: ColumnDef<LeaderboardDataItem>[] = [
    {
        accessorKey: "order",
        header: () => <div className="text-center">Rank</div>,
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("order")}</div>
        ),
    },
    {
        accessorKey: "address",
        header: () => <div className="text-center">Wallet</div>,
        cell: ({ row }) => <div className="lowercase">{
            formatEvmAddress(row.getValue("address"))
        }</div>,
    },
    {
        accessorKey: "totalPoint",
        header: () => <div className="text-center">Score</div>,
        cell: ({ row }) => <div>{(row.getValue("totalPoint") as number).toFixed(2)}</div>,
    },
    {
        accessorKey: "assignedResourceCount",
        header: () => <div className="text-center">Resources</div>,
        cell: ({ row }) => <div>{row.getValue("assignedResourceCount")}</div>,
    },
    {
        accessorKey: "assignedCpuCount",
        header: () => <div className="text-center">CPU</div>,
        cell: ({ row }) => <div>{row.getValue("assignedCpuCount")}</div>,
    },
    {
        accessorKey: "assignedBandwith",
        header: () => <div className="text-center">Bandwidth</div>,
        cell: ({ row }) => <div>{row.getValue("assignedBandwith")}</div>,
    },
    {
        accessorKey: "lastCountry",
        header: () => <div className="text-left ml-8 ">Location</div>,
        cell: ({ row }) => <div className="w-28  truncate text-center">{row.getValue("lastCountry")}</div>,
    },


]

export function DataTableDemo({ data }: { data: LeaderboardDataItem[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [pagination, setPagination] = React.useState<PaginationState>(
        {
            pageSize: 10,
            pageIndex: 0,
        }
    )

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination
        },
    })

    return (
        <div className="w-[105%]">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter by address"
                    value={(table.getColumn("address")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("address")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm bg-transparent text-zinc-300"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="ml-auto text-black" variant="outline">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide() && ((column?.columnDef as any).header()?.props.children !== "Location"))
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value: any) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {(column?.columnDef as any).header()}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                        {table
                            .getAllColumns()
                            .filter((column) => ((column?.columnDef as any).header()?.props.children === "Location"))
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value: any) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        Location
                                    </DropdownMenuCheckboxItem>
                                )
                            })}

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div>
                    <span className="text-zinc-300">
                        Showing {
                            pagination.pageIndex * pagination.pageSize + 10
                        } of {data.length} results
                    </span>
                </div>
                <div className="space-x-2">
                    <Button
                        size="sm"
                        onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + -1 }))}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
