import React from 'react'
import CardShow from '../components/Containers/CardShow';
import CardSchedule from '../components/UI/CardSchedule';
import CardSpecialties from '../components/UI/CardSpecialties';
import ContainerComments from '../components/Containers/ContainerComments';
import { fetchShowPsychologist } from '../features/psychologist/showPsychologistSlice';
import { fetchShowAppointments } from '../features/psychologist/showAppointmentsSlice';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { css } from '@emotion/react';

export default function ShowPsychologist() {
    const psychologistStatus = useSelector(state => state.showPsychologist.status);
    const appointmentsStatus = useSelector(state => state.showAppointments.status);
    const psychologist = useSelector(state => state.showPsychologist.single);
    const schedules = useSelector((state) => state.showPsychologist.schedules);
    const appointments = useSelector((state) => state.showAppointments.items);
    const dispatch = useDispatch();
    const pshychologistId = useParams();

    if(psychologistStatus === 'idle') {
        dispatch(fetchShowPsychologist({ id: parseInt(pshychologistId.id) }))
    }

    if(appointmentsStatus === 'idle') {
        dispatch(fetchShowAppointments({ id: parseInt(pshychologistId.id) }))
    }
    return (
        <StyledShow>
            <CardShow psychologist={psychologist} styles={show}/>
            <MiddleContainer>
                <CardSpecialties specialties={psychologist.specialties || []} styles={specialties} />
                <CardSchedule schedules={schedules} appointments={appointments} styles={schedule} />
            </MiddleContainer>
            <ContainerComments comments={psychologist.comments || []} />
        </StyledShow>
    )
}

const StyledShow = styled.div`
    padding-bottom: 20px;
`
const MiddleContainer = styled.div`
    display: flex;
    margin: 30px 0;
    gap: 30px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const show = css`
    height: auto; 
    padding: 18px;
`

const specialties = css`
    height: 430px;
    padding: 18px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 380px;
    }
`

const schedule = css`
    height: auto;
    padding: 18px;
`