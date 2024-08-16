import EventTable from "@/components/event-table";
import PageHeader from "@/components/page-header";
import { GOOGLE_CALENDAR_BASE_URL } from "@/constants/events";
import { Event, EventsResponseSchema } from "@/schemas/events-response";
import groupByDate from "@/utils/groupByDate";
import { CalendarIcon, UpdateIcon } from "@radix-ui/react-icons";
import { Button, Container, Flex, Grid, Section } from "@radix-ui/themes";
import Link from "next/link";

/**
 * A page to view upcoming and past events.
 */
export default async function EventsPage() {
  const url: string = `${GOOGLE_CALENDAR_BASE_URL}/${process.env.GOOGLE_CALENDAR_ID}/events?key=${process.env.GOOGLE_CLOUD_API_KEY}`;

  const data = await fetch(url, {
    cache: "no-store",
  }).then((res) => res.json());

  const result = EventsResponseSchema.safeParse(data);

  if (!result.success) {
    return <>{JSON.stringify(data)}</>;
  }

  const eventsResponse = result.data;

  const { past, upcoming } = groupByDate(
    eventsResponse.items,
    (event: Event) => event.start.dateTime
  );

  return (
    <>
      <PageHeader title="Events" subtitle="Explore our upcoming events.">
        <Flex className="gap-2 justify-center">
          {process.env.GOOGLE_CALENDAR_PUBLIC_ICAL_ADDRESS && (
            <Button asChild>
              <Link href={process.env.GOOGLE_CALENDAR_PUBLIC_ICAL_ADDRESS}>
                <UpdateIcon /> Sync Calendar
              </Link>
            </Button>
          )}

          {process.env.GOOGLE_CALENDAR_SHAREABLE_LINK && (
            <Button variant="soft" asChild>
              <Link href={process.env.GOOGLE_CALENDAR_SHAREABLE_LINK}>
                <CalendarIcon /> Visit Calendar
              </Link>
            </Button>
          )}
        </Flex>
      </PageHeader>

      <Section>
        <Container>
          <Grid
            columns={{
              initial: "1",
              md: "2",
            }}
            className="gap-8"
          >
            <EventTable label="Upcoming" events={upcoming} />

            <EventTable label="Past" events={past} />
          </Grid>
        </Container>
      </Section>
    </>
  );
}
