import {FC, useMemo} from "react";
import {useSearchParams} from "react-router-dom";
import {useGraphQuery} from "../../../redux/api/graphs.api";
import {Box, CircularProgress, Grid} from "@mui/material";
import {theme} from "../../Theme/theme";
import {AlexDataView} from "../../formUtils/AlexDataView/AlexDataView";
import {IGraphEntity} from "../../../redux/api/types/graphs";

export const GraphsCard: FC = () => {
    const [searchParams] = useSearchParams()

    const {
        data,
        isFetching,
        isLoading,
        isSuccess
    } = useGraphQuery({id: searchParams.get('id')!})
    const graphData = useMemo(() => data as IGraphEntity,[data])

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flex: 1,
            overflowY: 'scroll',
        }}>
            {(isLoading || isFetching || !isSuccess) && (<Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress/>
            </Box>)}
            {(!isLoading && !isFetching && isSuccess) && (<Box sx={{
                width: '100%',
                padding: theme.spacing(2),
                boxSizing: 'border-box'
            }}>
                <Grid container spacing={theme.spacing(2)}>
                    <Grid item xs={6}>
                        <AlexDataView label={'ID'}>
                            {graphData.id}
                        </AlexDataView>
                    </Grid>
                    <Grid item xs={6}>
                        <AlexDataView label={'Название'}>
                            {graphData.name}
                        </AlexDataView>
                    </Grid>
                    <Grid item xs={6}>
                        <AlexDataView label={'Дата создания'}>
                            {graphData.creationDate}
                        </AlexDataView>
                    </Grid>
                    <Grid item xs={6}>
                        <AlexDataView label={'Дата изменения'}>
                            {graphData.updateDate}
                        </AlexDataView>
                    </Grid>
                </Grid>
            </Box>)}
        </Box>
    )
}